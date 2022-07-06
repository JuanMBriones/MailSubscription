// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * Defines a handler for cheking the health of the API
 * @param {*} req The actual request object
 * @param {*} res The response object
 */
export default function handler(req, res) {
  res.status(200).json({
    name: 'John Doe',
  });
}
