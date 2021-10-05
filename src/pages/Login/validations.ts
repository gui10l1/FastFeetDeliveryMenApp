import * as Yup from 'yup';

interface IData {
  [key: string]: string;
}

export const loginFormValidation = async (data: IData): Promise<void> => {
  const validationShape = Yup.object().shape({
    cpf: Yup.string().required(),
    password: Yup.string().required(),
  });

  await validationShape.validate(data, {
    abortEarly: false,
  });
};
