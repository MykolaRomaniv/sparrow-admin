import { IMAGE_KEY } from "constants/index"
import firebase from "firebase/app"
import firebaseDataProvider from "ra-data-firebase-client"
import firebaseConfig from "services/firebaseConfig"

const defaultFirebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

defaultFirebase.analytics()

const settings = { context: "", imagekey: IMAGE_KEY, filekey: "files" }

const dataProvider = firebaseDataProvider(firebase, settings)

const database = defaultFirebase.database()

const customDataProvider = {
  ...dataProvider,
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
