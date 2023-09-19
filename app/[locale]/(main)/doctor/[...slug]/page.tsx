import React from 'react';

const DoctorListPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div>Test Routing</div>
      {params.slug[0]}
      {JSON.stringify(params.slug)}
    </>
  );
};

export default DoctorListPage;
