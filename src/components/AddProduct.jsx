export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-green-400 hover:bg-yellow-500 rounded-full w-20 h-8 flex items-center justify-center text-lg"><span>+</span></button>
            
            <p>Add to Cart</p>
            
       
        </div>
    )
}