export function TryCatch(errorMessage?: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value; // Save the original method

    // Wrap the original method with try-catch
    descriptor.value = async function (...args: any[]) {
      try {
        // Call the original method with the correct `this` context
        return await originalMethod.apply(this, args);
      } catch (error) {
        // Log the error
        console.error(errorMessage);
      }
    };

    return descriptor;
  };
}
