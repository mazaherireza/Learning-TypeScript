namespace App {
  export const AutoBind = function (
    _1: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    const { value: originalMethod } = descriptor;
    const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjustedDescriptor;
  };
}
