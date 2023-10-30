import { collection, doc, setDoc } from "firebase/firestore"; 

const ref = collection(db, "events");

/* await setDoc(doc(ref, "SF"), {
    description: "0",
    name: "workshop 0");
}
await setDoc(doc(ref, "SF"), {
        id: 0,
        name: "workshop 2");
}*/