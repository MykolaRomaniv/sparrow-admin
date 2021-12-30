import firebase from "firebase/app"
import firebaseDataProvider from "ra-data-firebase-client"
import firebaseConfig from "services/firebaseConfig"
import { convertFileToBase64 } from "utils"

const defaultFirebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

defaultFirebase.analytics()

const settings = { context: "", imagekey: "images", filekey: "files" }

const dataProvider = firebaseDataProvider(firebase, settings)

const database = defaultFirebase.database()

const customDataProvider = {
  ...dataProvider,
  update: (
    resource: string,
    params: { id: string; data: any; previousData: any },
  ) => {
    if (resource !== "products" || !params.data.pictures) {
      // fallback to the default implementation
      return dataProvider.update(resource, params)
    }
    /**
     * For products update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    const newPictures = params.data.pictures

    return Promise.all(newPictures.map(convertFileToBase64))
      .then((base64Pictures) =>
        base64Pictures.map((picture64, i) => ({
          id: i,
          src: picture64,
          title: `${params.data.pictures[i].title}`,
        })),
      )
      .then((transformedNewPictures) =>
        dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            pictures: [...transformedNewPictures],
          },
        }),
      )
  },
  getMany: (source: string, params: { ids: string[] }) => {
    const resource = [settings.context, source].join("/")
    const getMany = new Promise((resolve) => {
      const data = params.ids.map((id: string) =>
        database
          .ref([resource, id].join("/"))
          .once("value")
          .then((snapshot) => snapshot.val()),
      )
      Promise.all([...data]).then((values) => {
        resolve(values)
      })
    })
    return getMany.then((data) => ({ data }))
  },
}

export default customDataProvider
