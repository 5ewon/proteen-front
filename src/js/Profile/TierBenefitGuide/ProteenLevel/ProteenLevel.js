import './ProteenLevel.scss';

function ProteenLevel() {
    return (
        <div id="level">
            <label htmlFor="file"><span id="next-proteen"></span>g 획득 시 다음 등급 달성!</label>
            <progress id="file" max="100" value="70"> 70% </progress>
        </div>
    )
}

export default ProteenLevel;