import {Mac, User} from '../../assets'
import { GoClock } from "react-icons/go";
import './main.css'
import { data } from '../../constants/data';
import {CategoryItem} from '../';

const Main = () => {
  return (
    <div className="tips">
      <div className="image">
        <img src={Mac} alt="" />
        <div className="info_tips">
          <div className="tips_info-btn">Tips</div>
          <h2>5 ways to improve your digital project management</h2>
          <div className="tips_author">
            <span>
              <img src={User} alt="" />
              <span>Jhon Carter</span>
            </span>
            <span>
              <GoClock/>
              <span>March 26, 2023</span>
            </span>
          </div>
        </div>
      </div>
      <div className="category_tips">
        {data.map(item => (
          <CategoryItem key={item.title} info={item}/>
        ))}
      </div>
    </div>
  )
}

export default Main