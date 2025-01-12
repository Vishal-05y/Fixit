import { Customer } from "@/model/customer-model";

export async function createCustomer(customer){
    try {
        await Customer.create(customer);
    } catch (error) {
        throw new Error(error);
    }
}