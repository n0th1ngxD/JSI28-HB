// Thiết kế kết nối firebase.
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAugehBPfp7h0k5uUtXTPNQWSH4HL3d_rQ",
    authDomain: "nps-jsi18-hb-vu.firebaseapp.com",
    projectId: "nps-jsi18-hb-vu",
    storageBucket: "nps-jsi18-hb-vu.appspot.com",
    messagingSenderId: "1059245847176",
    appId: "1:1059245847176:web:950b2773005e6a4f7ba53d"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//////// xây dựng các hàm phù hợp

//// hàm render tasks
function renderTasks(tasks) {

}

//// hàm cập nhật dữ liệu mới nhất trên db
const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));

    const tasks = querySnapshot.docs.map((doc) => {
        id: doc.id;
        description: doc.data().description;
    });

    renderTasks(tasks);
}

//// hàm thêm 1 task vào CSDL
const addTask = async (description) => {
    await addDoc(collection(db, "tasks"), {description})
    getTasks();
    taskInput.value = "";
}

//// hàm xóa dữ liệu khi bấm nút X

//// hàm lắng nghe sự kiện khi người dùng click thêm vào task
addTaskBtn.addEventListener("click", () => {
    const description = taskInput.value.trim();
    if(description !== "") {
        addTask(description);
    }
});

//// gọi hàm lấy dữ liệu mới nhất từ db
getTasks();