declare namespace Express {
  interface Request {
    user: {
      // For now, I think this should be enough. 
      // Later on we can add or remove fields.
      email: string;
      userId: string;
      type: string;
    };
  }
}

export{};
