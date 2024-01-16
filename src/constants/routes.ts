abstract class BasePath {
  // eslint-disable-next-line no-unused-vars
  constructor(protected readonly basePath: string) {}
}

class SimplePath extends BasePath {
  value = this.basePath;
}

class DetaillPath extends BasePath {
  value = (id: string) => this.basePath + `/${id}`;
}

export class Routes {
  static Index = new SimplePath("/");
  static Posts = new SimplePath("/posts");
  static PostsById = new DetaillPath("/posts");
  static PostsByTag = new DetaillPath("/posts/tag");
}
