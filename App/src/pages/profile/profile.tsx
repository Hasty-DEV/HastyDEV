import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDataById } from '../../data/services/userService';  

interface UserDataTypes {
  first_name: string;
  last_name: string;
  email: string;
}

function ProfilePage() {
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  const { userId } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const user = await getUserDataById(userId);
      setUserData(user);
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    } 
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.first_name} {userData.last_name}</h1>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Carregando perfil...</p>
      )}
    </div>
  );
}

export default ProfilePage;
