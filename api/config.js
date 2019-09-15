export const CONFIG = {
	host: process.env.LISTEN_ADDRESS || '',
	port: parseInt(process.env.LISTEN_PORT || '3000'),
};

export default CONFIG;
