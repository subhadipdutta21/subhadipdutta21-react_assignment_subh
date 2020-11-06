let commonStyles = {

    thumbsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
        border: '1px solid lightgray',
        padding: 10
    },

    thumb: {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 190,
        height: 190,
        padding: 4,
        boxSizing: 'border-box',
        cursor: 'pointer',
        position: 'relative'
    },

    thumbInner: {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    },

    img: {
        display: 'block',
        width: 'auto',
        height: '100%'
    },

    uploadContainer: {
        height: 150, width: '100%', border: '0.5px dashed black', textAlign: 'center',
    },

    pt50: {
        paddingTop: 50
    },

    formContainer: {
        textAlign: 'center', padding: 30
    },

    wd50: {
        width: '70%'
    },

    customInput: { width: '100%', height: 'calc(1.5em + .75rem + 2px)', border: '1px solid #ced4da', borderRadius: '.25rem', padding: '.375rem .75rem' },

    tl: {
        textAlign: 'left'
    },

    suggestionBg: { backgroundColor: '#f9f9f9', cursor: 'pointer' },

    wd100: { width: '100%' },

    vh50: { height: '50vh' },

    selectIcon: { position: 'absolute', color: 'red', left: 10, fontSize: 20 }

}

export default commonStyles