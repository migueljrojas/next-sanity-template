// sanity/deskStructure.ts
import type { StructureResolver } from "sanity/desk";

const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Ajustes")
        .schemaType("settings")
        .child(S.document().schemaType("settings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("page").title("Páginas"),
      S.listItem()
        .title("Catálogo")
        .child(
          S.list()
            .title("Catálogo")
            .items([
              S.documentTypeListItem("product").title("Productos"),
              S.documentTypeListItem("category").title("Categorías"),
            ])
        ),
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("author").title("Autores"),
            ])
        ),
    ]);

export default deskStructure;
