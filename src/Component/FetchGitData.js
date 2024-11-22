

const FetchGitData = async()=>{

  let response = await fetch ('https://api.github.com/users/itsnitin10x')
  let data = await response.json();
  return data ;

};

export default  FetchGitData;