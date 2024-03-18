
const Layout = ({count}: {count?: number}) => {
    return (
        <button className='bg-cyan-700 rounded-2xl'>
            {String(count) ?? ''}
        </button>
    );
};

export default Layout;