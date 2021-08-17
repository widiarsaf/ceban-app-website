
let initialState={
	users: [
		{
			id: 1,
			nama: "Abdul Rohman",
			umur: "20",
			alamat: "Lumajang"
		},
		{
			id: 2,
			nama: "Nabilah Argyanti",
			umur: "20",
			alamat: "Tumpang"
		},
		{
			id: 3,
			nama: "Elvira",
			umur: "19",
			alamat: "Kediri"
		},
		{
			id: 4,
			nama: "Naufal",
			umur: "20",
			alamat: "Tangerang"
		},
		{
			id: 5,
			nama: "Widiareta Safitri",
			umur: "19",
			alamat: "Kepanjen"
		},
	],
	error: false,
	title: "CEBAN",
}
const users=(state=initialState,action) => {
	return state;
}

export default users
