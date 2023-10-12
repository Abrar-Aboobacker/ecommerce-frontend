import * as Yup from "yup";
export const productSchema = Yup.object().shape({
    name:Yup.string().required("Please enter a Product name"),
    quantity:Yup.string().required("Please enter the number quantity"),
    price:Yup.string().required("Please enter the price"),
    discription:Yup.string().required("Please enter the discription")
})