const axiosMock = {
	create: jest.fn(() => axiosMock),
	get: jest.fn(() => {
		console.log(`axiosMock.get has been called`);
		return Promise.resolve({ data: {} });
	})
};

export default axiosMock;
