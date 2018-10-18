import AddColorForm from "../forms/add-color-form";
const logColor = (title, hexCode) => {
    console.log(`New color: ${title} ${hexCode}`);
}
const HomeView = () =>
    <div>
        <AddColorForm onNewColor = {logColor}/>
    </div>

export default HomeView;