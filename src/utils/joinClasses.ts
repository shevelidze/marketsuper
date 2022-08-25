export interface ClassesObject {
  [key: string]: boolean;
}

export default function joinClasses(classesObject: ClassesObject) {
  const classList: string[] = [];

  for (const className in classesObject) {
    if (classesObject[className]) classList.push(className);
  }

  return classList.join(' ');
}
