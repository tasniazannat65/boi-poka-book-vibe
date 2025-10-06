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


const getWishListBook = ()=>{
    const wishListDataSTR = localStorage.getItem('wishList');
    if(wishListDataSTR){
        const storedWishListBook = JSON.parse(wishListDataSTR);
        return storedWishListBook;
    }
    else{
        return [];
    }
}

const addToWishListDB = (bookId)=>{
    const storedWishListData = getWishListBook();
    if(storedWishListData.includes(bookId)){
        toast.warn('book already added in the wishlist!!');
        return;

    }
    else{
        storedWishListData.push(bookId);
        const wishData = JSON.stringify(storedWishListData);
        localStorage.setItem('wishList', wishData)
    }
}

export {addToStoredDB, getStoredBook, addToWishListDB, getWishListBook}