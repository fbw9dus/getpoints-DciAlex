
var Patients = require('../data/patients');

exports.getPatients =  (req, res, next) => {
  var patients =  Patients.find()
  res.status(200).send(patients);
  console.log(Patients)
};

exports.getPatient =  (req, res, next) => {
  const { id } = req.params;
//   console.log(id)
  var patient =  Patients.findById(id)
  res.status(200).send(patient);
};

// exports.deletePatient = async (req, res, next) => {
//   const { id } = req.params;
//   var patient = await Records.findByIdAndDelete(id)
//   res.status(200).send(patient);
// };

// exports.updatePatient = async (req, res, next) => {
//   const { id } = req.params;
//   const dt = req.body;
//   var patient = await Patients.findByIdAndUpdate(id, dt, {new: true})
//   res.status(200).send(patient);
// };

// exports.addPatient =async (req, res, next) => {
//   const data = req.body;
//   var patient = new Patients(data)
//   await patient.save()
//   res.status(200).send(record);
// };
