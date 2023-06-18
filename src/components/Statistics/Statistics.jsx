import React from "react";
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map((item, index) => (
                    <li className={css.item} key={index}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Statistics;
