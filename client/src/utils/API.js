import axios from 'axios';

export default {
  registerUser: function(userData) {
    return axios.post('api/register', userData);
  },
  getUserId: function(userId) {
    return axios.get('/api/users', userId);
  },
  getProject: function(id) {
    return axios.get('/api/projects/' + id);
  },
  deleteProject: function(id) {
    return axios.delete('/api/deleteproject/' + id);
  },
  updateProject: function(id, projectData) {
    return axios.put('/api/updateproject/' + id, projectData);
  },
  saveProject: function(projectData) {
    return axios.post('/api/addproject', projectData);
  },
  saveStudent: function(studentData) {
    return axios.post('/api/addstudent', studentData);
  },
  deleteStudent: function(id) {
    return axios.delete('/api/deletestudent/' + id);
  },
  addProjectStudents: function(projectId, studentId) {
    return axios.post('/api/addProjectStudents/' + projectId, studentId);
  },
  removeProjectStudents: function(projectId, studentId) {
    return axios.post('/api/removeProjectStudents/' + projectId, studentId);
  },
  getProjectStudents: function(projectId) {
      return axios.get('/api/getProjectStudents/' + projectId);
  },
  getAll: function(username) {
    return axios.get('/api/dashboard', username);
  }
};
