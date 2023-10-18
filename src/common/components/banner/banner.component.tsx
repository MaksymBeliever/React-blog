import { FC } from 'react';
import { Container } from '../container/container.component';

export const Banner: FC =() => {

    return (
        <section className="bg-theme-gray shadow-banner text-white p-8 mb-8">
            <Container>
                <h1 className="font-titillium drop-shadow-logo text-center text-logo pb-2">React blog</h1>
                <p className="text-center text-2xl font-light">Place to share your knowledge</p>
            </Container>
        </section>
    );
}
