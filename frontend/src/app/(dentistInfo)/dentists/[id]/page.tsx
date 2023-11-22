import getDentist from "@/libs/dentist/getDentist";

import DentistInfo from "../../../../components/DentistInfo";

const Dentist = async ({ params }: { params: { id: string } }) => {
  const dentistJson = await getDentist(params.id);
  const dentistData = dentistJson.data;

  return <DentistInfo params={params} dentistData={dentistData} />;
};

export default Dentist;
