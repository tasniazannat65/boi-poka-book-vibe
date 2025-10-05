import { toast } from "react-toastify";

const getStoredBook = ()=>{
    const storedBookSTR = localStorage.getItem('readList');
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (bookId) =>{
    const storedBookData = getStoredBook()
if(storedBookData.includes(bookId)){
    toast.warn('Book already added!!')
    return;
}
else{
    storedBookData.push(bookId)
    const data = JSON.stringify(storedBookData)
    localStorage.setItem('readList', data)
}
}

export {addToStoredDB, getStoredBook}