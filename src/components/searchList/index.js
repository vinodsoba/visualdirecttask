import React from 'react';
import Card from '../card';




export function SearchList({ filteredPersons }) {
    const filtered = filteredPersons && filteredPersons.map(product => <Card key={product.id} product={product} />);
    return (
        <section>
            {filtered}
        </section>
    );
}