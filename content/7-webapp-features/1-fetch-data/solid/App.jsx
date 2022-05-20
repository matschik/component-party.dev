import Users from './Users';
import { Suspense, ErrorBoundary } from 'solid-js';

export default function App() {
	return (
		<ErrorBoundary fallback={<p>An error occurred while fetching users</p>}>
			<Suspense fallback={<p>Fetching users...</p>}>
				<Users />
			</Suspense>
		</ErrorBoundary>
	);
}
