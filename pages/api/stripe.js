import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    try {
      const prams = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'AU'],
        },
        shipping_options: [{ shipping_rate: 'shr_1LeD03GXUZXKek3EP9HLaxyO' }],
        line_items: req.body.map((item) => {
          const img = item.images[0].asset._ref;
          const newImage = img
            .replace(
              'image-',
              'https://cdn.sanity.io/images/mt2hten1/production/'
            )
            .replace('-webp', '.webp')
            .replace('-png', '.png')
            .replace('-jpg', '.jpg');

          console.log('IMAGE', newImage);
          return {
            price_data: {
              currency: 'aud',
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      };
      const session = await stripe.checkout.sessions.create(prams);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
