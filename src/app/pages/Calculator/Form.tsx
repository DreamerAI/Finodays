import { Formik, Field, Form } from "formik";
import { CustomCheckbox, SelectInput, TextInput } from "../../shared/Inputs/TextInput";
import ApiService from "../../@api/api.service";
import * as Yup from 'yup';

import { MarketValueProps } from "../../@api/model/marketValue.model";

export interface FormValues {
    address: string;
    сonstructionYear: string;
    roomCnt: string;
    area: string;
    floor: string;
    renovationType: string;
    renovationYear: string;
    ceilingHeight: string;
    finishing: string;

    parking: boolean;
    park: boolean;
    school: boolean;
    kindergarten: boolean;
    metro: boolean;

    balcony: boolean;
    loggia: boolean;
    windows: boolean;
}


export const MyForm = ({ setMarketValue }: MarketValueProps) => {




    const handleSubmit = async (values: FormValues) => {
        try {
            const response = await ApiService.getMarketValue(values);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setMarketValue(response)
        } catch (error) {
            console.error(error);
        }
    };


    const initialValues: FormValues = {
        address: "",
        сonstructionYear: "",
        roomCnt: "",
        area: "",
        floor: "",
        renovationType: "",
        renovationYear: "",
        ceilingHeight: "",

        finishing: "",

        parking: false,
        park: false,
        school: false,
        kindergarten: false,
        metro: false,

        balcony: false,
        loggia: false,
        windows: false,
    };


    const validationSchema = Yup.object({
        сonstructionYear: Yup.number().min(0, 'Число должно быть больше нуля').nullable(),
        roomCnt: Yup.number().min(0, 'Число должно быть больше нуля').nullable(),
        area: Yup.number().min(0, 'Число должно быть больше нуля').nullable(),
        floor: Yup.number().min(0, 'Число должно быть больше нуля').nullable(),
        renovationYear: Yup.number().min(0, 'Число должно быть больше нуля').nullable(),
        ceilingHeight: Yup.number().min(0, 'Число должно быть больше нуля').nullable(),
    });


    return (
        <div className="flex-1">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className="py-8 px-6 bg-bg-block flex flex-col gap-3 rounded-main h-full">
                    <div className="flex flex-col gap-3">
                        <p className="text-text-dark-gray font-semibold mb-3">Данные о доме</p>
                        <TextInput name="address" placeholder="Адрес" />
                        <div className="flex gap-3">
                            <TextInput name="сonstructionYear" placeholder="Год постройки дома" type="number" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-text-dark-gray font-semibold mb-3">Данные о квартире</p>
                        <div className="flex gap-3">
                            <TextInput name="roomCnt" placeholder="Кол-во комнат" type="number" />
                            <TextInput name="area" placeholder="Площадь" type="number" />
                            <TextInput name="floor" placeholder="Этаж" type="number" />

                        </div>
                        <div className="flex gap-3">
                            <TextInput name="renovationYear" placeholder="Год ремонта" type="number" />
                            <TextInput name="ceilingHeight" placeholder="Высота потолков" type="number" />
                        </div>
                        <div className="flex gap-3">
                            <SelectInput
                                name="finishing"
                                placeholder="Отделка"
                                label="Тип отделки"
                                options={[
                                    { value: "Без отделки", label: "Без отделки" },
                                    { value: "Предчистовая", label: "Предчистовая" },
                                    { value: "Черновая", label: "Черновая" },
                                    { value: "Неизвестно", label: "Неизвестно   " },
                                    { value: "С отделкой", label: "С отделкой" },
                                    { value: "Чистовая с мебелью", label: "Чистовая с мебелью" },
                                    { value: "Под ключ", label: "Под ключ" },
                                ]} />

                            <SelectInput
                                name="renovationType"
                                placeholder="Тип ремонта"
                                label="Тип ремонта"
                                options={[
                                    { value: "Неизвестно", label: "Неизвестно" },
                                    { value: "Косметический", label: "Косметический" },
                                    { value: "Дизайнерский", label: "Дизайнерский" },
                                ]}
                            />

                        </div>
                    </div>

                    <div>
                        <p className="text-text-dark-gray font-semibold mb-3">Инфраструктура</p>
                        <div className="flex gap-3 flex-wrap">
                            <Field name="kindergarten" component={CustomCheckbox} label="Детский сад рядом" />
                            <Field name="parking" component={CustomCheckbox} label="Есть парковка" />
                            <Field name="park" component={CustomCheckbox} label="Парк рядом" />
                            <Field name="school" component={CustomCheckbox} label="Школа рядом" />
                            <Field name="metro" component={CustomCheckbox} label="До метро < 15 минут" />
                        </div>

                    </div>

                    <div>
                        <p className="text-text-dark-gray font-semibold mb-3">Дополнительно</p>
                        <div className="flex gap-3 flex-wrap">
                            <Field name="balcony" component={CustomCheckbox} label="Есть балкон" />
                            <Field name="loggia" component={CustomCheckbox} label="Есть лоджия" />
                            <Field name="windows" component={CustomCheckbox} label="Окна на дорогу" />
                        </div>
                    </div>

                    <button type="submit" className=" w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Рассчитать стоимость</button>
                </Form>
            </Formik>
        </div>
    );
};

export default MyForm;
