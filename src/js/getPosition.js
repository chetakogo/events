export default function getPosition(oldIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(1 + Math.random() * 16);
  } while (newIndex === oldIndex);
  return newIndex;
}
