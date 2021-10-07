import React from "react";

function Doctors() {
  return (
    <div>
      <div className="doctor-bg">
        <div className="doctor-content">
          <h1 className="text-center doctorlist">
            <div class="spinner-border text-danger"></div>Doctors List
          </h1>
          <hr />
        </div>
        <div className="table-content">
          <div className="container-fluid">
            <table class="table text-center text-white">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th> Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Prof. Dr. M. A. Basher</td>
                  <td>Senior Consultant</td>
                  <td>Medicine</td>
                </tr>
                <tr>
                  <td>Prof. Dr. Md. Mofazzel Hossain</td>
                  <td>Chief Consultant</td>
                  <td>Medical Oncology</td>
                </tr>
                <tr>
                  <td>Prof. Dr. Mohammad Ali</td>
                  <td>Chief Consultant </td>
                  <td>Hepatobiliary & Pancreatic Surgery</td>
                </tr>

                <tr>
                  <td> Prof. Dr. Md. Nizamuddin Chowdhury</td>
                  <td>Senior Consultant & Head Dept.</td>
                  <td>Nephrology</td>
                </tr>

                <tr>
                  <td>Prof. Dr. S. M. Siddikur Rahman</td>
                  <td>Senior Consultant</td>
                  <td>Cardiology</td>
                </tr>

                <tr>
                  <td>Prof. Dr. M. A. Masud</td>
                  <td>Senior Consultant</td>
                  <td>Gastroenterology</td>
                </tr>

                <tr>
                  <td>Dr. Hashim Rabbi</td>
                  <td>Consultant</td>
                  <td>Hepatobiliary & Pancreatic Surgery</td>
                </tr>
                <tr>
                  <td>Dr. H. A.Nazmul Hakim (Shaheen)</td>
                  <td>Consultant</td>
                  <td>Hepatobiliary & Pancreatic Surgery</td>
                </tr>
                <tr>
                  <td>Dr. Mizanur Rahman</td>
                  <td>Consultant</td>
                  <td>Gastroenterology</td>
                </tr>

                <tr>
                  <td>Dr. Fazle Mahmud</td>
                  <td>Consultant</td>
                  <td>Neurosurgery</td>
                </tr>

                <tr>
                  <td>Dr. Farhana Qayum</td>
                  <td>Consultant</td>
                  <td>Dermatology & Venereology</td>
                </tr>
                <tr>
                  <td> Dr. Md. Raisul Tasnim</td>
                  <td>Consultant</td>
                  <td>Orthopaedic</td>
                </tr>
                <tr>
                  <td>Dr. Mohammad Aftab Halim</td>
                  <td>Consultant</td>
                  <td>Neuro Medicine</td>
                </tr>

                <tr>
                  <td>Dr. Shahina Begum Shanta</td>
                  <td>Consultant</td>
                  <td>Gynaecology</td>
                </tr>

                <tr>
                  <td>Dr. Nazmun Nahar</td>
                  <td>Consultant</td>
                  <td>Neonatology</td>
                </tr>

                <tr>
                  <td>Dr. Mohammad. Azizur Rahman</td>
                  <td> Senior Consultant</td>
                  <td>Paediatric Surgery</td>
                </tr>

                <tr>
                  <td>Dr. Rahat Afza chowdhury</td>
                  <td>Associate Consultant </td>
                  <td>Gynaecology</td>
                </tr>

                <tr>
                  <td> Dr. Zannat Ara Begum</td>
                  <td>Consultant</td>
                  <td>Gynaecology</td>
                </tr>

                <tr>
                  <td> Dr. Kazi Foyeza Akther</td>
                  <td>Consultant</td>
                  <td>Gynaecology</td>
                </tr>

                <tr>
                  <td> Dr. Farzana Zulfia Khan</td>
                  <td>Associate Consultant</td>
                  <td>Cardiology</td>
                </tr>
              </tbody>
            </table>
            <div className="paragraph">
              <h3 className="text-white text-center">
                <div class="spinner-border text-success"></div>From Brb Hospital
                Ltd
              </h3>
              <p className="text-white">
                "BRB Hospitals Limited is an International Standard Hospital
                with the facilities of ‘Center of Excellence’. The Center of
                Excellences are Gastro Liver Center,
                Hepato-Biliary-Pancreatic-Surgery, Medical Oncology, Mother &
                Child Care Center, Brain & Spine Center, Nephrology & Urology
                Center, Bone & Joint Center, Dental Center and other
                Ultra-modern ancillary & specialized services supported by
                Internal Medicine, Cardiology, Respiratory Medicine,
                Endocrinology & Diabetology, General & Laparoscopic Surgery,
                Breast Surgery, Hematology/Transfusion Medicine, ENT Head & Neck
                Surgery, Plastic & Reconstructive Surgery, Physiotherapy &
                Rehabilitation, Dermatology, Physical Medicine and Lab
                Medicine."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
