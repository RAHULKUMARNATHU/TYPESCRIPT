const profile = {
  age: 20,
  name: "alex",
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
console.log(profile.name);

const { age ,coords:{lat, lng}}: { age: number , coords:{lat:number , lng:number} } = profile;

console.log(age );
console.log(lng ,lat);



//   const { name, age }: { name: string; age: number } = profile;
//   const {coords: { lat, lng }}: { coords: { lat: number; lng: number } } = profile;
