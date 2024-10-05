

export default function Badge({ text }) {

    function badgeColor() {
        switch (text) {
            case 'In-Progress':
                return 'orange';
            case 'Done': 
                return '#d42875';
            default:
                return '#3266a8';
        }
    }

    return (
        <span style={{
            background: badgeColor(),
            borderRadius: 999,
            color: 'white',
            padding: 2,
            fontSize: 12,
            width: 'fit-content',
        }}>
            {text}
        </span>
    )
}