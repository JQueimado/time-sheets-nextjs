interface props {
  name: String;
}

export default async function TimeSheet({ name }: props) {
  return <div>This is a TimeSheet named {name}</div>;
}
