function Profile() {
  const avatarUrl = "https://tse3.mm.bing.net/th/id/OIP.SHtLxj_uyxcHLssPFcjVSgHaFE?pid=Api&P=0&h=180"; // Random placeholder image

  return (
    <div style={{ border: '1px solid black', borderRadius: '10px', padding: '20px', width: '200px', margin: '0 auto', textAlign: 'center' }}>
      <img 
        src={avatarUrl} 
        alt="Student Avatar" 
        style={{ borderRadius: '50%', width: '150px', height: '140px' }} 
      />
      <h3>Student Name</h3>
      <p>Class: 10th Grade</p>
    </div>
  );
}

export default Profile;