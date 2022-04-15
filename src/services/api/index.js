const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEST_PUBLIC_API_VERSION;
const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
  },
};
