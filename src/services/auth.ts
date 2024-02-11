interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dfsdjhfu4534h534j5h34j5345g35ghjhgsdhf',
        user: {
          name: 'Dionleno Oliveira',
          email: 'dionleno@email.com',
        },
      });
    }, 2000);
  });
}
