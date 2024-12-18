declare module 'pokemon_list/App' {
    const renderApp: any;
    export  {renderApp};
     
} 
declare module 'pokemon_list/PokemonCard' {
    const PokemonCard: React.ComponentType<any>;
    export  {PokemonCard};
}

declare module 'single_spa_shell/SingleSpaApp' {
    const initSpa: () => void;
    export {
        initSpa
    } 
}

declare module 'single-spa' {
    export function mount(name: string): Promise<void>;
} 