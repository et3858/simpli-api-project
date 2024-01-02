import { Company } from "../models/company.model";


export interface CompanyRepository {
    findAll(): Promise<Company[]>,
    create(content: object): Promise<Company>,
    findById(id: string): Promise<Company>,
    update(id: string, content: object): Promise<Company>,
    deleteById(id: string): Promise<void>,
};
