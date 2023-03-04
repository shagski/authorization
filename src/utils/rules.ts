export const rules = {
  required: (massage: string = "обязательное поле") => ({
    required: true,
    massage,
  }),
};
