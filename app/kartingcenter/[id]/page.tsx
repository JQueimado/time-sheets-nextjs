interface params {
  params: { id: string };
}

export default function KartingCenterID({ params }: params) {
  return <div>{params.id}</div>;
}
