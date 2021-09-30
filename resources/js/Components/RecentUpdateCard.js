import React from 'react'
import IconHeading from './IconHeading'

export default function RecentUpdateCard({ icon, colorScheme, title }) {
  const articles = [
    {
      title: 'Notice for Class Suspension due to Cyclone Yaas',
      date: 'May 24, 2021',
    },
    {
      title: 'Notice regarding classes of 2nd Semester MCA, M.Tech & M.Sc.',
      date: 'Apr 26, 2021',
    },
    {
      title: 'Notice and Programme for 6th Sem. B.Tech. External Lab Examination',
      date: 'June 12, 2021',
    },
  ]
  return (
    <div className="p-3">
      <IconHeading icon={icon} colorScheme={colorScheme}>
        {title}
      </IconHeading>
      <div className="space-y-4 mt-6">
        {articles.map((article) => (
          <div key={article.title}>
            <p className="text-gray-600 text-sm">{article.date}</p>
            <p className="text-gray-600 font-medium">{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
