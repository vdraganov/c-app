const axiosMock = {
	get: jest.fn(() => {
		console.log(`axiosMock.get has been called`);
		return Promise.resolve({ data: {} });
	})
};

export default axiosMock;
