module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5e4fa1e56a050e6bb9a4c38067ea2da9'),
  },
});
